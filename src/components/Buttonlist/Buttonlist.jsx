import { useState } from "react";
import Button from "../Button/Button";

function Buttonlist() {

    const btn =[
        {
           label:"+",
           change: +1,
        },
        {
           label:"-",
           change: -1,
        },
        {
           label:"+5",
           change: +5,
        },
        {
           label:"-5",
           change: -5,
        },
        {
           label:"+10",
           change: +10,
        },
        {
           label:"-10",
           change: -10,
        },
        {
           label:"reset",
           change: "reset",
        }
    ]

    const [count, setcount] = useState(0);

    const handlebuttonclick = (changevalue)=>{
        if (changevalue === "reset") {
            setcount(0)
        }else{
            setcount((prevsetcount)=> prevsetcount + changevalue)
        }
    }
  return (
    <div className="box">
        <h1>Current Count: {count}</h1>
        <div className="div">
      {btn.map((item)=>{
        return(
            <Button
            label={item.label}
            handleclick={()=> handlebuttonclick(item.change)}
            />
        )
      })}
    </div>
      </div>
  );
}

export default Buttonlist;

