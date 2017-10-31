window.onload=function(){
    var p=document.getElementsByTagName('p');
    var ul=document.getElementsByTagName('ul');
    for(var i=0;i<p.length;i++){
        p[i].onclick=(function(n){
            return function(){
                if(ul[n].className=='current'){
                    ul[n].className='';
                }else if(ul[n].className==''){
                    ul[n].className='current';
                }
            }
        })(i);
    }
}