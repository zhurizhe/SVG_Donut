/**
 * @description SVG Donut
 */

import React, { Component } from 'react';

export default class Donut extends Component {
    render(){
        let percent = this.props.percent;
        let sin = Math.sin, cos = Math.cos,PI = Math.PI;
        let x1=0,y1=0,x2=0,y2=0;
        let ang = (percent/100)*2*PI;
        let path = "";
        percent = Math.max(Math.min(percent,100),0);

        if(percent > 0 && percent <= 25){
            x1 = 26 * (1 + sin(ang))+2;
            y1 = 26 * (1 - cos(ang))+2;
            x2 = x1 - 8 * sin(ang);
            y2 = y1 + 8 * cos(ang);
        }else if(percent > 25 && percent <= 50){
            x1 = 26 * (1 + sin(PI-ang))+2;
            y1 = 26 * (1 + cos(PI-ang))+2;
            x2 = x1 - 8 * sin(PI-ang);
            y2 = y1 - 8 * cos(PI-ang);
        }else if(percent > 50 && percent <= 75){
            x1 = 26 * (1 - sin(ang-PI))+2;
            y1 = 26 * (1 + cos(ang-PI))+2;
            x2 = x1 + 8 * sin(ang-PI);
            y2 = y1 - 8 * cos(ang-PI);
        }else if(percent > 75 && percent < 100){
            x1 = 26 * (1 - cos(ang-(3*PI/2)))+2;
            y1 = 26 * (1 - sin(ang-(3*PI/2)))+2;
            x2 = x1 + 8 * cos(ang-(3*PI/2));
            y2 = y1 + 8 * sin(ang-(3*PI/2));
        }
        let isBig = 0;
        if(percent > 50){
            isBig = 1
        }
        let fill = '#7ED321';
        if(percent == 0){
            fill="#ffffff";
        }else if(percent < 60 && percent > 0){
            fill="#e3212c"
        }else if(percent <= 69 && percent >= 60){
            fill="#fd7a22"
        }else if(percent <= 79 && percent >= 70){
            fill="#fdcb2e"
        }else if(percent <= 89 && percent >= 80){
            fill="#afd043"
        }else if(percent >= 90){
            fill="#84cf41"
        }
        if(percent > 0 && percent < 100){
            path = <path d={"M28,2 A26,26 360 " + isBig + ",1 " + x1 + "," + y1 + " L" + x2 + "," + y2 + " A18,18 360 " + isBig + ",0 28,10 L28,2 "} fill={fill}></path>
        }else if(percent == 100){
            path = <circle cx="28" cy="28" r="23" strokeWidth="8" stroke={fill} ></circle>
        }

        let tx="16",ty="36",fontsize="18";
        if(percent < 10){
            tx = "22"
        }else if(percent == 100){
            fontsize = "16";
            tx = "12";
            ty = "34"
        }
        let content = <g transform={this.props.transform}>
            <circle cx="28" cy="28" r="21" strokeWidth="10" stroke="#0C4141"></circle>
            {path}
            <text id="98"  fontSize={fontsize} fontWeight="bold"  fill="#F5F5F5">
                <tspan x={tx} y={ty}>{percent}</tspan>
            </text>
        </g>;
        if(this.props.inSVG === "1"){
            return content;
        }else{
            return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 56 56">{content}</svg>
        }
         
    } 
}