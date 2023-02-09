const checkInclusion = function (s1, s2) {
  const length = s1.length
  const s2Values = s1.split('').reduce((prev, values) =>{
    prev[values] = (prev[values] || 0) + 1
    return prev
  } ,{})
  const set = new Set(s1)
  label: for (let i = 0; i < s2.length - length + 1; i++) {
    if (set.has(s2[i])) {
      const object = {...s2Values}
      for (let j = i; j < i + length; j++) {
        object[s2[j]] = (object[s2[j]] || 0) - 1
      }
      const values = Object.values(object)
      for (let j = 0; j < values.length; j++) {
        if (+values[j] !== 0){
          continue label
        }
      }
      return true
    }
  }
  return false
};


