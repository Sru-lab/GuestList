function egn()
{
    var display_Guest_array = [];
    for (var j = 1; j <=4; j++)
    {
        var name_of_the_guest = document.getElementById("ag"+j).value;
        console.log(name_of_the_guest);
        name_of_the_Guest_array.push(name_of_the_guest);
    }

    console.log(name_of_the_Guest_array);

var length_of_name_of_Guest_array = name_of_the_Guest_array.length;
console.log(length_of_name_of_Guest_array);
for (var k = 0; k < length_of_name_of_Guest_array; k++)
{
    display_Guest_array.push("<h4>NAME - "+ name_of_the_Guest_array[k] + "</h4");
    console.log(display_Guest_array);
}

console.log(display_Guest_array);
document.getElementById("display_name_with_commas").innerHTML = display_Guest_array;

var remove_commas = display_Guest_array.join(" ");
console.log(remove_commas);
document.getElementById("sgl").style.display = "none";
document.getElementById("solg").style.display = "inline-block";
}