
import Web3 from 'web3'





const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "buy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_reached",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_target",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_timer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "t_target",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "t_reached",
				"type": "uint256"
			}
		],
		"name": "set_target",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "temp",
				"type": "uint256"
			}
		],
		"name": "set_timer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



var web3;
var SeekGoldContract
var address
export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkApi)=>{
    

        try {
            if(Web3.givenProvider){ 
                web3 = new Web3(Web3.givenProvider);
			
             //   await Web3.givenProvider.enable()
                const networkId = await web3.eth.net.getId()
				const SeekGoldAddress = "0x17EE02E028ECe29F9f99C50F4443D20dc6519deD"
				var contract = new web3.eth.Contract(abi, SeekGoldAddress);
                
				SeekGoldContract = contract;
                const addresses = await web3.eth.getAccounts()
                address = addresses[0];
                thunkApi.dispatch(balance({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(target({
                    contract: SeekGoldContract,
                    address: address

                }))

				thunkApi.dispatch(reached({
                    contract: SeekGoldContract,
                    address: address

                }))

				return {
                    web3,
                    contract,
                    address,
					SeekGoldAddress,
                                                       }
            }else {console.log("error in loading web3")
					return {web3:null,contract:null,address:null,SeekGoldAddress:null}}
        } catch (error) {
            console.log("Error", error)
        }

    }
)



export const balance = createAsyncThunk("balance",
    async ({contract,address})=>{

		
        try {
            const balance1 = await contract.methods.get_timer().call()
			console.log("holder",balance1)
             return balance1

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const target = createAsyncThunk("target",
    async ({contract,address})=>{

		
        try {
            const target1 = await contract.methods.get_target().call()
	
             return target1

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const reached = createAsyncThunk("reached",
    async ({contract,address})=>{

		
        try {
            const reached1 = await contract.methods.get_reached().call()
	
             return reached1

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )





export const BuyFunction = createAsyncThunk("BuyFunction",
    async ({value})=>{
 

       try {
            const result = await SeekGoldContract.methods.buy().send({from : address, value: web3.utils.toWei(value,"ether"), gas: 3000000})
            return result;
        } catch (error) {
            console.log("Error in BUy Function",error)
			return error;
        }
    }
    )


export const ClickFunction = createAsyncThunk("ClickFunction",
    async ()=>{
 

       try {
            
            return {address,clicked:true};
        } catch (error) {
            console.log("Error in BUy Function",error)
			return error;
        }
    }
    )





const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,

        address : null,
        balance: null,
		target:null,          
        arrayAwait : null,
        reached : null,
        toggle: false,
		error: null,
		errorMessage: null,
		clicked: false,


    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        }
    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.address = action.payload.address;



         },

         [balance.fulfilled] : (state,action)=>{
            state.balance = action.payload
            },
		
		[target.fulfilled] : (state,action)=>{
			state.target = action.payload
			console.log("timer",action.payload)
				},

		[reached.fulfilled] : (state,action)=>{
			state.reached = action.payload
				},

		

       
        [ClickFunction.pending] : (state,action)=>{
			state.arrayAwait = true;

            state.toggle = !state.toggle;
			state.error = null;
        },
        [ClickFunction.fulfilled] : (state,action)=>{
			state.arrayAwait = false;
			state.clicked = true;
			state.address = action.payload.address
            state.toggle = !state.toggle;
		

        },


		[BuyFunction.pending] : (state,action)=>{
			state.arrayAwait = true;

            state.toggle = !state.toggle;
			state.error = null;
        },
        [BuyFunction.fulfilled] : (state,action)=>{
			state.arrayAwait = false;

            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },


       
//
    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle } = adoptSlice.actions
