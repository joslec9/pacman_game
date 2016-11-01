//list of features to build
//1) have JS display the work or brick/coin/getComputedStyle
//2) Have the pacman move up and down


var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2]
];

function displayWorld(){
    var output = "";
    
    for (var i=0; i<world.length; i++){
        output += '<div class="row">';
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] ==2)
                output += '\n\t<div class="brick"></div>';
           else if(world[i][j] ==1)
                output += '\n\t<div class="coin"></div>';
            if(world[i][j] ==0)
                output += '\n\t<div class="empty"></div>';
        } 
         output += "</div>";
    }
    console.log(output);
}