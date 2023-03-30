
const byBubbleSort = () => {
  const v = [2,7,1,4,3,5,0,8,2,-1,2];
  let size = v.length

  let aux;
  let rounds = 0;
  let ord = false;

  // for (let i = 0; i < size; i++) console.log(v[i])
  console.log(v)
  console.log('')

  while (!ord) {

    ord = true;
    for (let i = 0; i < size - 1 - rounds; i++) {
      if (v[i] > v[i + 1]) {

        aux = v[i + 1];
        v[i + 1] = v[i];
        v[i] = aux;

        ord = false;
      }
    }
    rounds++;
    console.log(v)
  }

  console.log('')
  console.log(v)
  // for (let i = 0; i < size; i++) console.log(v[i])
}

byBubbleSort()
