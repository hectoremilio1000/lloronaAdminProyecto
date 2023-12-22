import React from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

function Imagenes() {


  const storage = getStorage();

  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const archivoRef = ref(storage, archivo);
    const archivoImagesRef = ref(storage, `images/${archivo}`);
    await uploadBytes(archivoRef, archivo).then((snapshot) => {
      console.log('archivo cargado')
    })
  }


  return (
    <>
      <form>
        <input type='file' onChange={archivoHandler} />
        <input type='text' name='nombre' placeholder='nombra tu archivo' />
        <button>Enviar</button>
      </form>
    </>
  )
}

export default Imagenes