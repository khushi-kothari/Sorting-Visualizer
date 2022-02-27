import React, {Component} from "react";

class Graph extends Component{
    render(){
        return(
            <div className="my-14">
            <h1 className="bg-gray-100 w-min py-1 px-5 mx-auto md:ml-24 lg:ml-44">Graph</h1>
            <div className="mx-auto my-8 w-3/4 border border-slate-300 rounded-md h-4/5 p-8">
                <hr className="border-2 border-slate-500 md:w-3/4 lg:w-2/5 mx-auto"/>
                <div className="flex content-center justify-center">
                <div className="w-12 h-32 bg-blue-500 mr-1 md:mr-4"></div>
                <div className="w-12 h-70 bg-blue-500 mr-1 md:mr-4"></div>
                <div className="w-12 h-52 bg-blue-500 mr-1 md:mr-4"></div>
                <div className="w-12 h-20 bg-blue-500 mr-1 md:mr-4"></div>
                <div className="w-12 h-96 bg-blue-500 mr-1 md:mr-4"></div>
                </div>
            </div>
            </div>
        );
    }
}
export default Graph;