import { useState } from "react";
import "./ItemForm.css"; // we'll add styles here

function ItemForm({ submitText, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{submitText}</h2>
      <div className="form-group">
        <label>Item Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-btn">
        {submitText}
      </button>
    </form>
  );
}

export default ItemForm;
