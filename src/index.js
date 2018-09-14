/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let count = 0;
    for (let i = 0; i < preferences.length; i++){
        let love1, love2, love3;
        love1 = preferences[i];
        if (checkExist(love1)){
            love2 = preferences[love1-1];
            if (checkExist(love2)){
                love3 = preferences[love2-1];
                if (love3 === i+1 && love2 != i+1) count++;
            }
        }
    }

    function checkExist(num){
        return (preferences.length+1) > num;
   }
    return count/3;
};
