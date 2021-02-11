import React, {useState} from 'react';
import './App.css';
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion, {AccordionPropsType} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState(true);
    return (
        <div className={'App'}>


            {/*  <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <UnControlledRating/>
            {/*<UnControlledRating/>
            <UnControlledAccordion titleValue={"Menu"}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion collapsed={accordionCollapsed}
                       titleValue={'Menu'}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[{title: 'Olya', value: 1},
                           {title: 'Ira', value: 2},
                           {title: 'Karina', value: 3}]}
                       onClick={(value)=>{alert('user Hi')}}/>


            {/* <UnControlledOnOff/>*/}
            {/*<OnOff on={on} onChange={setOn}/>*/}
            <UnControlledOnOff onChange={setOn}/>{on.toString()}
        </div>
    );
}

type AppPagePropsType = {
    title: string
}

function AppPage(props: AppPagePropsType) {
    console.log("App rendering")
    return <div>{props.title}</div>
}

function hello() {
    alert("Hello IT-KAMASUTRA")
}

//hello();


export default App;