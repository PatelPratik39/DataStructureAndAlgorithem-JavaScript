let counter = 0;

function inception(){
    console.log(counter);
    // debugger;
    if(counter > 3){
        return 'done!!'
    }
    counter++;
   return inception();
    // console.log('Lasan Chand');
}
inception();