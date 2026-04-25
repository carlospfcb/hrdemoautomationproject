function generateEmployeeId() {
  const timestampPart = Date.now().toString().slice(-6); 
  const randomPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); 
  return `E${timestampPart}${randomPart}`; 
}

module.exports = { generateEmployeeId };