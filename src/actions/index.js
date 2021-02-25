export const    RESET='RESET'

export const chooseReset=(val)=>{
    console.log('val:',val);
    return{
        type:RESET,
        maxNum:val,
    }
}