const changeText = ["Website Development", "ReactJs", "MongoDB","ExpressJs"]

async function chnge(){
    while(true){
        for(let i=0;i<=changeText.length-1;i++){
            console.log(changeText[i])
                // setInterval(()=>{
                //     console.log(changeText[i])
                // },3000)
                await new Promise(resolve => {
                   
                    setTimeout(resolve, 3000)});
           
        }
    }
}

chnge()



