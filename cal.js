var count=0,once=0;
var err=document.querySelector(".output-val");
function clear_showval(val)
{
    let shows=document.querySelector(".output-val");
    let show_val=document.querySelector(".input-val");
    if(val=='babu_bye')
    {
            shows.innerHTML="";
            show_val.innerHTML="";
    }
    else{
    show_val.innerHTML="";
    }
}
function iscalculator_off_on(val)
{
    count+=1-val;
    let pow_sta=document.querySelector("#offline-online");
    if(count%2!=0)
    {
        pow_sta.classList.add("final");
        pow_sta.innerHTML="OF";
        return true;
    }
    else{
        pow_sta.classList.remove("final");
        pow_sta.innerHTML="ON";
        once=0;
        err.classList.remove("error");
        clear_showval('babu_bye');
        return false;
    } 
}
function error_babu()
{
    err.innerHTML="Invalid Syntax";
    err.classList.add("error");
}
function remove_collision(inp_val) {
    const lastChar = inp_val[inp_val.length - 1];
    const secondLastChar = inp_val[inp_val.length - 2];

    if (['+', '-', '*', '/', '%', '.'].includes(secondLastChar) && ['+', '-', '*', '/', '%', '.'].includes(lastChar)) {
        return inp_val.substring(0, inp_val.length - 2)+inp_val[inp_val.length-1];
    } else {
        return inp_val;
    }
}
function nums_active(get_val)
{
    let show_val=document.querySelector(".input-val");
    if(iscalculator_off_on(1))
    {
    if(get_val!='.'){
        show_val.innerHTML+=`${get_val}`;
    }
    else if(get_val=='.' && once==0){
        if(show_val.innerHTML=='')
        {
            show_val.innerHTML+=0+`${get_val}`;
        }
        else{
    show_val.innerHTML+=`${get_val}`;
        }
    once=1;
    }
    return show_val.innerHTML;
}
}
function ops_active(get_op) {
    if (iscalculator_off_on(1)) {
        let inp=document.querySelector(".input-val");
        let out=document.querySelector(".output-val");
        if(get_op!='clear' && get_op!='Result' && get_op!='C')
        {
          let curr_val=nums_active('');
            out.innerHTML+=curr_val+`${get_op}`;
            out.innerHTML=remove_collision(out.innerHTML);
            
            clear_showval(0);
            curr_val='';
        }
        else if(get_op=='clear')
        {
            let curr_val=nums_active('');
            if(curr_val!='')
            {
                inp.innerHTML=curr_val.substring(0,curr_val.length-1);
            }
            else{
                out.innerHTML=out.innerHTML.substring(0,out.innerHTML.length-1);
            }
        }
        else if(get_op=='C')
        {
            clear_showval('babu_bye');
            err.classList.remove("error");
        }
        else{
            if(out.innerHTML[out.innerHTML.length-1]<10 && inp.innerHTML[inp.innerHTML.length-1]<10)
            {
                out.innerHTML=inp.innerHTML;
            }
            else{
                try{
            out.innerHTML=eval(out.innerHTML+inp.innerHTML);
                }
                catch{
                    error_babu();
                }
            }
            clear_showval(0);
        }
        once=0;
    }
}

