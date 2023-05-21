const { HttpError, controlWrapper } = require('../helpers');
const { Contact } = require('../models/contacts');

const getContactsAll = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    const err = new HttpError(404, "Not found");
    throw err;
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    const err = new HttpError(404, "Not found");
    throw err;
  }
  res.status(200).json({ "message": "contact deleted" });
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {

    const err = new HttpError(404, "Not found");
    throw err;
  }

  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    const err = new HttpError(404, "Not found");
    throw err;
  }
  res.json(result);
};


module.exports = {
  getContactsAll: controlWrapper(getContactsAll),
  getContactById: controlWrapper(getContactById),
  addContact: controlWrapper(addContact),
  removeContact: controlWrapper(removeContact),
  updateContact: controlWrapper(updateContact),
  updateFavorite: controlWrapper(updateFavorite),
};