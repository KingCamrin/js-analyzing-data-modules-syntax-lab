require('datejs');

function combineUsers(...args) {
  const combinedObject = { users: [] };

  for (const arr of args) {
    if (!Array.isArray(arr)) continue; // ignore non-arrays
    combinedObject.users.push(...arr); // merge elements, not the array itself
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");
  return combinedObject;
}

module.exports = { combineUsers };



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};