function formatWords(words){
    //   if (words === '' || words === null return('');
    for (let i=0; i>words.length; i++){
    if (words[i] === ('')) {words[i].splice([i],1)}
    let sl = words[i]-2;
    let last = words[i]-1;
    }
    return(words+sl+'and' +last);