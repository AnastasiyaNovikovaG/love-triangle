/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let count = 0;
    for (let i = 0; i < preferences.length; i++){
        if (i === preferences[i+2]-1){
            if (i === preferences[i+1] - 3)
            {if (i === preferences[i] - 2)
                count++}
        }

    }
    return count;
};
