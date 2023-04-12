/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }

  let arr = [];

  arr = members.filter(item => {
    if(typeof item === 'string'){
      return item;
    }
  })

  arr = arr.map(item => {
    return item.trim()[0].toUpperCase();
  })

  arr = arr.sort();

  return arr.join('');
}


module.exports = {
  createDreamTeam
};
