const nama =["eka","rahman","tirta","bibit","burhan"]
const siswa = [80, 65, 90, 70, 50];
let kicau = "";
function cekKelulusan(){
  

  for(let i = 0; i<siswa.length; i++){
if(siswa[i] >=75){
    kicau = "lulus"
  } else  {
   kicau ="tidak lulus"
  }

    console.log(
     `Nama :${nama[i]}\nNilai :${siswa[i]}\nstatus:${kicau}`   
    )
  }

};
cekKelulusan()