import React, {Component} from "react";

class Button extends Component{
    render(){
        return(
            <div className="flex content-center justify-center my-14">
                <button className="h-9 w-14 border-2 border-slate-300 mr-2 ml-2">&lt;&lt;</button>
                <button className="h-9 w-14 border-2 border-slate-300 ml-2 mr-2">&lt;</button>
                <h1 className="mr-2 ml-2 text-gray-600">a/b</h1>
                <button className="h-9 w-14 border-2 border-slate-300 mr-2 ml-2">&gt;</button>
                <button className="h-9 w-14 border-2 border-slate-300 mr-2 ml-2">&gt;&gt;</button>
            </div>
        );
    }
}
export default Button;