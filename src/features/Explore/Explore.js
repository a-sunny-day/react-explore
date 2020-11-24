import React from 'react';

let elem1 = React.createElement("div", {dataName: "chris", className: "hello"}, "yeah");
let elem2 = <div key="__nothing__">
    <span>span</span>
    <h2>h2</h2>
</div>
let elem3 = <div key="__nothing__">
    <span>span</span>
</div>
console.log(elem1);
console.log(elem2);
console.log(elem3);