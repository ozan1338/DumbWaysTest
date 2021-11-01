let modal = 3000000;
const bunga = 0.025;

const mb = modal*bunga;


let totalModal = 0;
for(let i = 1; i<=12; i++){
  if( i === 1){
    totalModal = modal+mb;
    console.log('bulan '+ i);
    console.log(totalModal)
  }else{
    let tempMb = 0;
    tempMb = (modal+mb)*bunga;
    totalModal = totalModal+tempMb;
    console.log('bulan'+ i);
    console.log(totalModal) 
  }
}