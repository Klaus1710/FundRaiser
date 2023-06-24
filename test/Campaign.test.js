const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts; //listing of all the accounts existing on the local ganache network
let factory; //reference to deployed instance of the factory
let campaignAddress;  //stores the address of the instance of the campaign
let campaign;  //to store the instance of a campaign

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data : compiledFactory.bytecode})
        .send({from:accounts[0] , gas:'1000000'}); //since we are modifying or changing the blockchain so we are sending a transaction

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    })

    //since now we will use the method which is declared as view so we are not changing anything and hence its gonna be call not send
    const addresses = await factory.methods.getDeployedCampaigns().call(); //campaignAddress will have the first address amog the all returned several addresses
    campaignAddress = addresses[0];

    campaign = await new web3.eth.Contract(  //since the contract is already been deployed and we are just telling web3 about its existence so we do not need to use .deploy and .send again, instead we are just gonna specify the alreadt deployed contract address by passing it as our second argument
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    )
})


//Note: Ganache-cli will provide 10 accounts by default
describe('Campaigns', ()=>{
    it('deploys a factory and a campaign' ,()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })

    it('marks caller as the campaign manager', async ()=>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    })

    it('allows people to contribute money and mark them as approvers', async()=>{
        await campaign.methods.contribute().send({
            value:'200',
            from:accounts[1]
        })
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    })

    it('requires a minimum contribution', async ()=>{
        try {
            await campaign.methods.contribute().send({
                value:'5',
                from:accounts[1]
            })
            assert(false)
        } catch (error) {
            assert(error)
        }
    })

    it('allows a manager to make a payment request', async ()=>{
        await campaign.methods.createRequest('Buy Batteries','100',accounts[1]).send({
            from:accounts[0],
            gas:'1000000'
        })

        const request = await campaign.methods.requests(0).call();

        assert.equal('Buy Batteries', request.description);
    })

    it('processes requests', async()=>{
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10','ether')
        })

        await campaign.methods.createRequest('A',web3.utils.toWei('5','ether'),accounts[1]).send({
            from: accounts[0],
            gas:'1000000'
        })

        await campaign.methods.approveRequest(0).send({
            from:accounts[0],
            gas:'1000000'
        })

        await campaign.methods.finalizeRequest(0).send({
            from:accounts[0],
            gas:'1000000'            
        })

        let balance = await web3.eth.getBalance(accounts[1]);
        balance=web3.utils.fromWei(balance,'ether');
        balance=parseFloat(balance);
        assert(balance>104);
    })
})