const fs = require('fs');
const path = require('path');
const toursFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const tourData = fs.readFileSync(toursFilePath, 'utf-8');
    return JSON.parse(tourData);
};

const getById = (id) => {
    const tours = getAll();
    return tours.find(tour => tour.id === id);
};

const getByQuery = (query) => {
    const tours = getAll();
    return tours.filter(tour => tour.name.includes(query));
};
//////////////////////////////// 
// put k liye update function banaya hai jo model me hoga aur controller me call hoga
const update = (id, updatedData) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);//find index is faster 
    if (index === -1) return null;///id dhundhenge this is for put agr nhi mila to null return hoga
    

    tours[index] = { ...tours[index], ...updatedData, id };
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2));//id ko updayte karne ke liye writeFileSync ka use kiya hai
    return tours[index];

};
const deleteTour = (id) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);
    if(index == -1){
        return null;
    }
    tours.splice(index,1);
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2));
    return true;
}


const save = (tour) => {
    const tours = getAll();
    tours.push(tour);
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2));
};
//Model is the backbone of the CRUD operation where we have all access get,post,put
//user wale k liye y pura 

module.exports = {
    getAll,
    getById,
    getByQuery,
    update,
    deleteTour,
    save
};//