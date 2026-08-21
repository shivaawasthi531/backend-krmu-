const tourModel = require('../model/tourModel');

const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

const getTourById = (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tourModel.getById(id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour Not Found'})
    }
    res.json(tour);
}

const getToursByQuery = (req, res) => {
    const { query } = req.query;
    const tours = tourModel.getByQuery(query);
    res.json(tours);
};

const save = (tour) => {
    const tours = tourModel.getAll();
    tours.push(tour);
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2));
}

module.exports = {
    getAllTours,
    getTourById,
    getToursByQuery,
    save
};