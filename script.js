let input=document.getElementById("input")
let link = document.getElementById('link')
let list = document.getElementById('list')
let del = document.getElementById('delete')

let i=1

function strike(k){
    let attr="nothing"
    let strike="text-decoration:line-through"
    let li = document.getElementById("content"+k)
    attr+=li.getAttribute("style")
    if(attr.indexOf(strike)===-1)
    {
        console.log("strike"+k)
        li.setAttribute('style', 'text-decoration:line-through')
    }  
    else{
        console.log("unstrike"+k)
        li.setAttribute('style', 'text-decoration:none')
    }
   
}

function delete_striked(){
    let ol = document.getElementById('list')
    let strike="text-decoration:line-through"
    let arr=[]
    let j=0
    let f=i
    let g=i
    for(let k=1;k<i;k++){
        let attr="nothing"
        
        let li = document.getElementById("content"+k)
        attr+=li.getAttribute("style")
        console.log(attr)
        if(attr.indexOf(strike)!==-1)
        {
            arr[j]=k
            j++
            ol.removeChild(li)
            console.log("removed"+k)
            f--
        }  
    }
    i=f
    console.log(arr)
    j=1
    for(let k=1;k<g;k++){            
        if(arr.indexOf(k)===-1){
            let li = document.getElementById("content"+k)
            li.setAttribute("id","content"+j)
            li.setAttribute("onclick","strike("+j+")")
            console.log(k+"changed to "+j)
            j++
            
        }
    }
    
    
}
