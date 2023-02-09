/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let N = s.length;
  if (N < 2){
    return s
  }
  N = 2 * N + 1;
  let L = new Array(N + 1);
  L[0] = 0;
  L[1] = 1;
  let C = 1;
  let R = 2;
  let i = 0;
  let iMirror;
  let maxLPSLength = 0;
  let maxLPSCenterPosition = 0;
  let start = -1;
  let end = -1;
  let diff = -1;

  for (i = 2; i < N; i++)
  {
    iMirror = 2 * C - i;
    L[i] = 0;
    diff = R - i;

    if (diff > 0)
      L[i] = Math.min(L[iMirror], diff);

    while (((i + L[i]) + 1 < N && (i - L[i]) > 0) &&
    (((i + L[i] + 1) % 2 === 0) ||
      (s[Math.floor((i + L[i] + 1) / 2)] ===
        s[Math.floor((i - L[i] - 1) / 2)])))
    {
      L[i]++;
    }

    if (L[i] > maxLPSLength)
    {
      maxLPSLength = L[i];
      maxLPSCenterPosition = i;
    }

    if (i + L[i] > R)
    {
      C = i;
      R = i + L[i];
    }

  }

  start = (maxLPSCenterPosition - maxLPSLength) / 2;
  end = start + maxLPSLength - 1;

  return s.slice(start, end + 1)
};



let s = "aa"
console.log(longestPalindrome(s))
