let mygraph;
function setup(){
    createCanvas(1000, 700);
    background(40);

    // new Graph(array, x scale, y scale, x value, y value, x unit, y unit);
    mygraph = new Graph(arr, 85, 45, 1, 1, 'roky', 'graf');
}


function draw(){
    mygraph.drawGraph(10,20);
    mygraph.plotData();
    //mygraph.plotDataMult();
}