function addDAta() {
    let inpVal = document.getElementById("inpData");
    let btn = document.getElementById("btn");
    let ul = document.getElementById("data");
    let show = document.getElementById("show");
    let array = [];

    btn.addEventListener("click",() => {
    let li = document.createElement("li");
        ul.append(li);
        array.push(inpVal.value)
        let x = JSON.stringify(array)
        localStorage.setItem("data",x)
        let r = JSON.parse(localStorage.getItem("data"))
        // li.innerText = inpVal.value;
        console.log(x);
        console.log(r);
        for(let i = 0; i <= r.lenght; r++ ){
            document.getElementsByTagName("li")[i].innerText += r[i];
        }
        inpVal.value = "";

        show.addEventListener("click",()=>{
            r.map((a,i)=>{
                li.innerText = r[i]
                ul.append(li)

                // console.log(i);
                // console.log(a);
                console.log(r);
            })
            
        })

    });
}

addDAta()
