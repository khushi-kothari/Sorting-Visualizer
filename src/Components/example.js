import React, {Component} from "react";
import Button from './buttons.js';

class Example extends Component {
    render() {
        return ( 
        <div>
            <h1 className="bg-gray-100 w-min py-1 px-5 mx-auto md:ml-24 lg:ml-44">Example</h1>
            {/* main example box */}
            <div className="mx-auto my-8 w-3/4 border border-slate-300 rounded-md h-4/5 p-3 pt-10 ">
                {/* Grid array */}
                <div className="text-gray-600">
                <div className="flex examplearray content-center justify-center">
                    <div className="flex_item rounded-l-lg md:rounded-l-2xl">21</div>
                    <div className="flex_item">22</div>
                    <div className="flex_item">14</div>
                    <div className="flex_item">16</div>
                    <div className="flex_item rounded-r-lg md:rounded-r-2xl">12</div>
                </div>
                {/* change classname of flex_item, no border & padding same as above */}
                <div className="flex examplearray content-center justify-center">
                    <div className="flex_item1">0</div>
                    <div className="flex_item1">1</div>
                    <div className="flex_item1">2</div>
                    <div className="flex_item1">3</div>
                    <div className="flex_item1">4</div>
                </div>
                </div>
                {/* Steps div */}
                <Button/>
            </div>
            

        </div>
        );
    }
    
}
export default Example;