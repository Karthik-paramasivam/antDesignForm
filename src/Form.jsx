// import React, { useState } from "react";
// import { Button, Form, Input, Radio, Tag, Select } from "antd";

// export default function Formvalidation() {
//     const [value, setValue] = useState(0);
//   const onChange = (e) => {
//     console.log('radio checked', e.target.value);
//     setValue(e.target.value);
//   };
//   return (
//     <div style={{ width: "30%", margin: "0 auto", border: "2px solid red" }}>
//       <Form
//         name="basic"
//         layout="vertical"
//         style={{ maxWidth: "500" }}
//       >
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[
//             {
//               required: true,
//               message: "Please input your username!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Gender"
//           name="gender"
//           rules={[
//             {
//               required: true,
//               message: "Please select your gender!",
//             },
//           ]}
//         >
//  <Radio.Group onChange={onChange} value={value}>
//       <Radio value={1}>Male</Radio>
//       <Radio value={2}>Female</Radio>
    
//     </Radio.Group>
//             </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Email address!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Phone"
//           name="phone"
//           type="number"
//           rules={[
//             {
//               required: true,
//               message: "Please input your phone number!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Course Interested"
//           name="course"
//           rules={[
//             {
//               required: true,
//               message: "Please select your course!",
//             },
//           ]}
//         >
          
//           <Select
//     showSearch
//     placeholder="Select a course"
//     filterOption={(input, option) =>
//       (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//     }
//     options={[
//       {
//         value: '1',
//         label: 'React',
//       },
//       {
//         value: '2',
//         label: 'Java',
//       },
//       {
//         value: '3',
//         label: 'Python',
//       },
//       {
//         value: '4',
//         label: 'Flutter',
//       },
//     ]}
//   />

//         </Form.Item>

//         <Form.Item
//           label="Educational Qualification"
//           name="educational qualification"
//           rules={[
//             {
//               required: true,
//               message: "Please select your Educational Qualification!",
//             },
//           ]}
//         >
          
//           <Select
//     showSearch
//     placeholder="Select a course"
//     filterOption={(input, option) =>
//       (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//     }
//     options={[
//       {
//         value: '1',
//         label: 'B.A',
//       },
//       {
//         value: '2',
//         label: 'B.Sc',
//       },
//       {
//         value: '3',
//         label: 'B.Com',
//       },
//       {
//         value: '4',
//         label: 'B.B.A',
//       },
//       {
//         value: '5',
//         label: 'ITI/Diploma',
//       },
//       {
//         value: '6',
//         label: 'B.E/ B.Tech Computer Science',
//       },
//       {
//         value: '7',
//         label: 'B.E/ B.Tech ECE',
//       },
//       {
//         value: '8',
//         label: 'B.E/ B.Tech EEE',
//       },
//       {
//         value: '9',
//         label: 'B.E/ B.Tech Information Technology',
//       },
//       {
//         value: '10',
//         label: 'B.E/ B.Tech Civil',
//       },
//       {
//         value: '11',
//         label: 'B.E/ B.Tech Mechanical',
//       },
//       {
//         value: '12',
//         label: 'B.E/ B.Tech Others',
//       },
//       {
//         value: '13',
//         label: 'M.E/ M.Tech',
//       },
//       {
//         value: '14',
//         label: 'Others',
//       },
//     ]}
//   />

//         </Form.Item>
//         <Form.Item>
//         <Button type="primary" htmlType="submit" style={{width:"50%", margin:"0 auto"}}>
//         Submit
//       </Button>
//         </Form.Item>


//       </Form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Button, Form, Input, Radio, Select, Table, message } from "antd";

// export default function FormValidation() {
//   const [formData, setFormData] = useState([]);
//   const [value, setValue] = useState(0);
//   const [form] = Form.useForm();

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const onFinish = (values) => {
//     setFormData([...formData, values]);
//     form.resetFields();
//     message.success("Form submitted successfully!");
//     console.log("Submitted Data: ", values);
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//       render: (gender) => (gender === 1 ? "Male" : "Female"),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Course Interested",
//       dataIndex: "course",
//       key: "course",
//       render: (course) => {
//         const courses = {
//           1: "React",
//           2: "Java",
//           3: "Python",
//           4: "Flutter",
//         };
//         return courses[course];
//       },
//     },
//     {
//       title: "Educational Qualification",
//       dataIndex: "educationalQualification",
//       key: "educationalQualification",
//       render: (qualification) => {
//         const qualifications = {
//           1: "B.A",
//           2: "B.Sc",
//           3: "B.Com",
//           4: "B.B.A",
//           5: "ITI/Diploma",
//           6: "B.E/ B.Tech Computer Science",
//           7: "B.E/ B.Tech ECE",
//           8: "B.E/ B.Tech EEE",
//           9: "B.E/ B.Tech Information Technology",
//           10: "B.E/ B.Tech Civil",
//           11: "B.E/ B.Tech Mechanical",
//           12: "B.E/ B.Tech Others",
//           13: "M.E/ M.Tech",
//           14: "Others",
//         };
//         return qualifications[qualification];
//       },
//     },
//   ];

//   return (
//     <div style={{ width: "50%", margin: "0 auto", border: "2px solid red", padding: "20px" }}>
//       <Form form={form} name="basic" layout="vertical" style={{ maxWidth: "500" }} onFinish={onFinish}>
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Gender"
//           name="gender"
//           rules={[{ required: true, message: "Please select your gender!" }]}
//         >
//           <Radio.Group onChange={onChange} value={value}>
//             <Radio value={1}>Male</Radio>
//             <Radio value={2}>Female</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, message: "Please input your Email address!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Phone"
//           name="phone"
//           type="number"
//           rules={[{ required: true, message: "Please input your phone number!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Course Interested"
//           name="course"
//           rules={[{ required: true, message: "Please select your course!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select a course"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "React" },
//               { value: "2", label: "Java" },
//               { value: "3", label: "Python" },
//               { value: "4", label: "Flutter" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Educational Qualification"
//           name="educationalQualification"
//           rules={[{ required: true, message: "Please select your Educational Qualification!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select your qualification"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "B.A" },
//               { value: "2", label: "B.Sc" },
//               { value: "3", label: "B.Com" },
//               { value: "4", label: "B.B.A" },
//               { value: "5", label: "ITI/Diploma" },
//               { value: "6", label: "B.E/ B.Tech Computer Science" },
//               { value: "7", label: "B.E/ B.Tech ECE" },
//               { value: "8", label: "B.E/ B.Tech EEE" },
//               { value: "9", label: "B.E/ B.Tech Information Technology" },
//               { value: "10", label: "B.E/ B.Tech Civil" },
//               { value: "11", label: "B.E/ B.Tech Mechanical" },
//               { value: "12", label: "B.E/ B.Tech Others" },
//               { value: "13", label: "M.E/ M.Tech" },
//               { value: "14", label: "Others" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" style={{ width: "50%", margin: "0 auto" }}>
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>

//       {/* Display the submitted data in a table */}
//       <Table columns={columns} dataSource={formData} rowKey={(record) => record.email} />
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Button, Form, Input, Radio, Select, Table, message } from "antd";

// export default function FormValidation() {
//   const [formData, setFormData] = useState([]);
//   const [value, setValue] = useState(0);
//   const [form] = Form.useForm(); // Initialize the form instance

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const onFinish = (values) => {
//     setFormData([...formData, values]); // Store the form data
//     form.resetFields(); // Reset the form fields after submission
//     message.success("Form submitted successfully!"); // Display success message
//   };

//   const validatePhoneNumber = (_, value) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!value || phoneRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid phone number"));
//   };

//   const validateEmail = (_, value) => {
//     if (!value || value.includes("@") && value.endsWith(".com")) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid Email"));
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//       render: (gender) => (gender === 1 ? "Male" : "Female"),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Course Interested",
//       dataIndex: "course",
//       key: "course",
//       render: (course) => {
//         const courses = {
//           1: "React",
//           2: "Java",
//           3: "Python",
//           4: "Flutter",
//         };
//         return courses[course];
//       },
//     },
//     {
//       title: "Educational Qualification",
//       dataIndex: "educationalQualification",
//       key: "educationalQualification",
//       render: (qualification) => {
//         const qualifications = {
//           1: "B.A",
//           2: "B.Sc",
//           3: "B.Com",
//           4: "B.B.A",
//           5: "ITI/Diploma",
//           6: "B.E/ B.Tech Computer Science",
//           7: "B.E/ B.Tech ECE",
//           8: "B.E/ B.Tech EEE",
//           9: "B.E/ B.Tech Information Technology",
//           10: "B.E/ B.Tech Civil",
//           11: "B.E/ B.Tech Mechanical",
//           12: "B.E/ B.Tech Others",
//           13: "M.E/ M.Tech",
//           14: "Others",
//         };
//         return qualifications[qualification];
//       },
//     },
//   ];

//   return (
//     <div style={{ width: "50%", margin: "0 auto", border: "2px solid red", padding: "20px" }}>
//       <Form
//         form={form} // Attach the form instance
//         name="basic"
//         layout="vertical"
//         style={{ maxWidth: "500px" }}
//         onFinish={onFinish} // Handle form submission
//       >
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Gender"
//           name="gender"
//           rules={[{ required: true, message: "Please select your gender!" }]}
//         >
//           <Radio.Group onChange={onChange} value={value}>
//             <Radio value={1}>Male</Radio>
//             <Radio value={2}>Female</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please input your Email address!" },
//             { validator: validateEmail }, // Custom email validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Phone"
//           name="phone"
//           type="number"
//           rules={[
//             { required: true, message: "Please input your phone number!" },
//             { validator: validatePhoneNumber }, // Custom phone validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Course Interested"
//           name="course"
//           rules={[{ required: true, message: "Please select your course!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select a course"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "React" },
//               { value: "2", label: "Java" },
//               { value: "3", label: "Python" },
//               { value: "4", label: "Flutter" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Educational Qualification"
//           name="educationalQualification"
//           rules={[{ required: true, message: "Please select your Educational Qualification!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select your qualification"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "B.A" },
//               { value: "2", label: "B.Sc" },
//               { value: "3", label: "B.Com" },
//               { value: "4", label: "B.B.A" },
//               { value: "5", label: "ITI/Diploma" },
//               { value: "6", label: "B.E/ B.Tech Computer Science" },
//               { value: "7", label: "B.E/ B.Tech ECE" },
//               { value: "8", label: "B.E/ B.Tech EEE" },
//               { value: "9", label: "B.E/ B.Tech Information Technology" },
//               { value: "10", label: "B.E/ B.Tech Civil" },
//               { value: "11", label: "B.E/ B.Tech Mechanical" },
//               { value: "12", label: "B.E/ B.Tech Others" },
//               { value: "13", label: "M.E/ M.Tech" },
//               { value: "14", label: "Others" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" style={{ width: "50%", margin: "0 auto" }}>
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>

//       {/* Display the submitted data in a table */}
//       <Table columns={columns} dataSource={formData} rowKey={(record) => record.email} />
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Button, Form, Input, Radio, Select, Table, message } from "antd";

// export default function FormValidation() {
//   const [formData, setFormData] = useState([]);
//   const [value, setValue] = useState(0);
//   const [form] = Form.useForm(); // Initialize the form instance
//   const [editingItem, setEditingItem] = useState(null);

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const onFinish = (values) => {
//     if (editingItem) {
//       // Update existing item
//       const updatedData = formData.map(item => item.email === editingItem.email ? values : item);
//       setFormData(updatedData);
//       setEditingItem(null); // Reset editing item
//     } else {
//       // Add new item
//       setFormData([...formData, values]);
//     }
//     form.resetFields(); // Reset the form fields after submission
//     message.success("Form submitted successfully!"); // Display success message
//   };

//   const validatePhoneNumber = (_, value) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!value || phoneRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid phone number"));
//   };

//   const validateEmail = (_, value) => {
//     if (!value || value.includes("@") && value.endsWith(".com")) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid Email"));
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//       render: (gender) => (gender === 1 ? "Male" : "Female"),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Course Interested",
//       dataIndex: "course",
//       key: "course",
//       render: (course) => {
//         const courses = {
//           1: "React",
//           2: "Java",
//           3: "Python",
//           4: "Flutter",
//         };
//         return courses[course];
//       },
//     },
//     {
//       title: "Educational Qualification",
//       dataIndex: "educationalQualification",
//       key: "educationalQualification",
//       render: (qualification) => {
//         const qualifications = {
//           1: "B.A",
//           2: "B.Sc",
//           3: "B.Com",
//           4: "B.B.A",
//           5: "ITI/Diploma",
//           6: "B.E/ B.Tech Computer Science",
//           7: "B.E/ B.Tech ECE",
//           8: "B.E/ B.Tech EEE",
//           9: "B.E/ B.Tech Information Technology",
//           10: "B.E/ B.Tech Civil",
//           11: "B.E/ B.Tech Mechanical",
//           12: "B.E/ B.Tech Others",
//           13: "M.E/ M.Tech",
//           14: "Others",
//         };
//         return qualifications[qualification];
//       },
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_, record) => (
//         <div>
//           <Button onClick={() => handleEdit(record)} style={{color:"blue"}} >
//             Update
//           </Button>
//           <Button onClick={() => handleDelete(record.email)} style={{color:"#f5222d"}}>
//             Delete
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   const handleEdit = (item) => {
//     form.setFieldsValue(item); // Populate the form with the item data
//     setEditingItem(item); // Set the item being edited
//   };

//   const handleDelete = (email) => {
//     const updatedData = formData.filter(item => item.email !== email);
//     setFormData(updatedData);
//     message.success("Item deleted successfully!"); // Display success message
//   };

//   return (
//     <div style={{ width: "80%", margin: "0 auto", border: "2px solid red", padding: "20px" }}>
//       <Form
//         form={form} // Attach the form instance
//         name="basic"
//         layout="vertical"
//         style={{ maxWidth: "500px" }}
//         onFinish={onFinish} // Handle form submission
//       >
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Gender"
//           name="gender"
//           rules={[{ required: true, message: "Please select your gender!" }]}
//         >
//           <Radio.Group onChange={onChange} value={value}>
//             <Radio value={1}>Male</Radio>
//             <Radio value={2}>Female</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please input your Email address!" },
//             { validator: validateEmail }, // Custom email validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Phone"
//           name="phone"
//           type="number"
//           rules={[
//             { required: true, message: "Please input your phone number!" },
//             { validator: validatePhoneNumber }, // Custom phone validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Course Interested"
//           name="course"
//           rules={[{ required: true, message: "Please select your course!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select a course"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "React" },
//               { value: "2", label: "Java" },
//               { value: "3", label: "Python" },
//               { value: "4", label: "Flutter" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Educational Qualification"
//           name="educationalQualification"
//           rules={[{ required: true, message: "Please select your Educational Qualification!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select your qualification"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "B.A" },
//               { value: "2", label: "B.Sc" },
//               { value: "3", label: "B.Com" },
//               { value: "4", label: "B.B.A" },
//               { value: "5", label: "ITI/Diploma" },
//               { value: "6", label: "B.E/ B.Tech Computer Science" },
//               { value: "7", label: "B.E/ B.Tech ECE" },
//               { value: "8", label: "B.E/ B.Tech EEE" },
//               { value: "9", label: "B.E/ B.Tech Information Technology" },
//               { value: "10", label: "B.E/ B.Tech Civil" },
//               { value: "11", label: "B.E/ B.Tech Mechanical" },
//               { value: "12", label: "B.E/ B.Tech Others" },
//               { value: "13", label: "M.E/ M.Tech" },
//               { value: "14", label: "Others" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" style={{ width: "50%", margin: "0 auto" }}>
//             {editingItem ? "Update" : "Submit"}
//           </Button>
//         </Form.Item>
//       </Form>

//       {/* Display the submitted data in a table */}
//       <Table columns={columns} dataSource={formData} rowKey={(record) => record.email} />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Button, Form, Input, Radio, Select, Table, message } from "antd";

// export default function FormValidation() {
//   const [formData, setFormData] = useState([]);
//   const [value, setValue] = useState(0);
//   const [form] = Form.useForm(); // Initialize the form instance
//   const [editingItem, setEditingItem] = useState(null);
//   const [editingEmail, setEditingEmail] = useState(null); // Track email of the currently edited item

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const onFinish = (values) => {
//     if (editingEmail) {
//       // Update existing item
//       const updatedData = formData.map(item =>
//         item.email === editingEmail ? values : item
//       );
//       setFormData(updatedData);
//       setEditingEmail(null); // Reset editing email
//     } else {
//       // Add new item
//       setFormData([...formData, values]);
//     }
//     form.resetFields(); // Reset the form fields after submission
//     message.success("Form submitted successfully!"); // Display success message
//   };

//   const validatePhoneNumber = (_, value) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!value || phoneRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid phone number"));
//   };

//   const validateEmail = (_, value) => {
//     if (!value || value.includes("@") && value.endsWith(".com")) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid Email"));
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//       render: (gender) => (gender === 1 ? "Male" : "Female"),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Course Interested",
//       dataIndex: "course",
//       key: "course",
//       render: (course) => {
//         const courses = {
//           1: "React",
//           2: "Java",
//           3: "Python",
//           4: "Flutter",
//         };
//         return courses[course];
//       },
//     },
//     {
//       title: "Educational Qualification",
//       dataIndex: "educationalQualification",
//       key: "educationalQualification",
//       render: (qualification) => {
//         const qualifications = {
//           1: "B.A",
//           2: "B.Sc",
//           3: "B.Com",
//           4: "B.B.A",
//           5: "ITI/Diploma",
//           6: "B.E/ B.Tech Computer Science",
//           7: "B.E/ B.Tech ECE",
//           8: "B.E/ B.Tech EEE",
//           9: "B.E/ B.Tech Information Technology",
//           10: "B.E/ B.Tech Civil",
//           11: "B.E/ B.Tech Mechanical",
//           12: "B.E/ B.Tech Others",
//           13: "M.E/ M.Tech",
//           14: "Others",
//         };
//         return qualifications[qualification];
//       },
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_, record) => (
//         <div>
//           <Button
//             onClick={() => handleEdit(record)}
//             style={{ color: "blue" }}
//             disabled={editingEmail && editingEmail !== record.email} // Disable if editing another item
//           >
//             Update
//           </Button>
//           <Button
//             onClick={() => handleDelete(record.email)}
//             style={{ color: "#f5222d" }}
//           >
//             Delete
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   const handleEdit = (item) => {
//     form.setFieldsValue(item); // Populate the form with the item data
//     setEditingEmail(item.email); // Set the email of the item being edited
//   };

//   const handleDelete = (email) => {
//     const updatedData = formData.filter(item => item.email !== email);
//     setFormData(updatedData);
//     message.success("Item deleted successfully!"); // Display success message
//   };

//   return (
//     <div style={{ width: "80%", margin: "0 auto", border: "2px solid red", padding: "20px" }}>
//       <Form
//         form={form} // Attach the form instance
//         name="basic"
//         layout="vertical"
//         style={{ maxWidth: "500px" }}
//         onFinish={onFinish} // Handle form submission
//       >
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Gender"
//           name="gender"
//           rules={[{ required: true, message: "Please select your gender!" }]}
//         >
//           <Radio.Group onChange={onChange} value={value}>
//             <Radio value={1}>Male</Radio>
//             <Radio value={2}>Female</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please input your Email address!" },
//             { validator: validateEmail }, // Custom email validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Phone"
//           name="phone"
//           type="number"
//           rules={[
//             { required: true, message: "Please input your phone number!" },
//             { validator: validatePhoneNumber }, // Custom phone validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Course Interested"
//           name="course"
//           rules={[{ required: true, message: "Please select your course!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select a course"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "React" },
//               { value: "2", label: "Java" },
//               { value: "3", label: "Python" },
//               { value: "4", label: "Flutter" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Educational Qualification"
//           name="educationalQualification"
//           rules={[{ required: true, message: "Please select your Educational Qualification!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select your qualification"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "B.A" },
//               { value: "2", label: "B.Sc" },
//               { value: "3", label: "B.Com" },
//               { value: "4", label: "B.B.A" },
//               { value: "5", label: "ITI/Diploma" },
//               { value: "6", label: "B.E/ B.Tech Computer Science" },
//               { value: "7", label: "B.E/ B.Tech ECE" },
//               { value: "8", label: "B.E/ B.Tech EEE" },
//               { value: "9", label: "B.E/ B.Tech Information Technology" },
//               { value: "10", label: "B.E/ B.Tech Civil" },
//               { value: "11", label: "B.E/ B.Tech Mechanical" },
//               { value: "12", label: "B.E/ B.Tech Others" },
//               { value: "13", label: "M.E/ M.Tech" },
//               { value: "14", label: "Others" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" style={{ width: "50%", margin: "0 auto" }}>
//             {editingEmail ? "Update" : "Submit"}
//           </Button>
//         </Form.Item>
//       </Form>

//       {/* Display the submitted data in a table */}
//       <Table columns={columns} dataSource={formData} rowKey={(record) => record.email} />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Button, Form, Input, Radio, Select, Table, message } from "antd";

// export default function FormValidation() {
//   const [formData, setFormData] = useState([]);
//   const [value, setValue] = useState(0);
//   const [form] = Form.useForm(); 
//   const [editingItem, setEditingItem] = useState(null);
//   const [currentItem, setCurrentItem] = useState(null); 
//   const [btn, setBtn] = useState(false);
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const onFinish = (values) => {
//     if (currentItem) {
//       // Update existing item
//       const updatedData = formData.map(item =>
//         item.email === currentItem.email ? { ...item, ...values } : item
//       );
//       setFormData(updatedData);
//     //   setEditingEmail(null); // Reset editing email
//     setCurrentItem(null);
//     setBtn(false);

//     } else {
//       // Add new item
//       setFormData([...formData, values]);
//     }
//     form.resetFields(); // Reset the form fields after submission
//     message.success("Form submitted successfully!"); // Display success message
//   };

//   const validatePhoneNumber = (_, value) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!value || phoneRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid phone number"));
//   };

//   const validateEmail = (_, value) => {
//     if (!value || value.includes("@") && value.endsWith(".com")) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Please enter a valid Email"));
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//       render: (gender) => (gender === 1 ? "Male" : "Female"),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Course Interested",
//       dataIndex: "course",
//       key: "course",
//       render: (course) => {
//         const courses = {
//           1: "React",
//           2: "Java",
//           3: "Python",
//           4: "Flutter",
//         };
//         return courses[course];
//       },
//     },
//     {
//       title: "Educational Qualification",
//       dataIndex: "educationalQualification",
//       key: "educationalQualification",
//       render: (qualification) => {
//         const qualifications = {
//           1: "B.A",
//           2: "B.Sc",
//           3: "B.Com",
//           4: "B.B.A",
//           5: "ITI/Diploma",
//           6: "B.E/ B.Tech Computer Science",
//           7: "B.E/ B.Tech ECE",
//           8: "B.E/ B.Tech EEE",
//           9: "B.E/ B.Tech Information Technology",
//           10: "B.E/ B.Tech Civil",
//           11: "B.E/ B.Tech Mechanical",
//           12: "B.E/ B.Tech Others",
//           13: "M.E/ M.Tech",
//           14: "Others",
//         };
//         return qualifications[qualification];
//       },
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_, record) => (
//         <div>
//           <Button
//             onClick={() => handleEdit(record)}
//             style={{ color: "blue" }}
//             // disabled={currentItem && currentItem !== record.email} // Disable if editing another item
//             disabled={btn && (currentItem && currentItem.email !== record.email)} // Disable if btn is true and editing a different item

//           >
//             Update
//           </Button>
//           <Button
//             onClick={() => handleDelete(record.email)}
//             style={{ color: "#f5222d" }}
//           >
//             Delete
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   const handleEdit = (item) => {
//     form.setFieldsValue(item); // Populate the form with the item data
//     setCurrentItem(item); // Set the current item being edited
//     setBtn(true);
//   };

//   const handleDelete = (email) => {
//     const updatedData = formData.filter(item => item.email !== email);
//     setFormData(updatedData);
//     message.success("Item deleted successfully!"); // Display success message
//   };

//   return (
//     <div style={{ width: "80%", margin: "0 auto", border: "2px solid red", padding: "20px" }}>
//       <Form
//         form={form} // Attach the form instance
//         name="basic"
//         layout="vertical"
//         style={{ maxWidth: "500px" }}
//         onFinish={onFinish} // Handle form submission
//       >
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Gender"
//           name="gender"
//           rules={[{ required: true, message: "Please select your gender!" }]}
//         >
//           <Radio.Group onChange={onChange} value={value}>
//             <Radio value={1}>Male</Radio>
//             <Radio value={2}>Female</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please input your Email address!" },
//             { validator: validateEmail }, // Custom email validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Phone"
//           name="phone"
//           type="number"
//           rules={[
//             { required: true, message: "Please input your phone number!" },
//             { validator: validatePhoneNumber }, // Custom phone validation
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Course Interested"
//           name="course"
//           rules={[{ required: true, message: "Please select your course!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select a course"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "React" },
//               { value: "2", label: "Java" },
//               { value: "3", label: "Python" },
//               { value: "4", label: "Flutter" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Educational Qualification"
//           name="educationalQualification"
//           rules={[{ required: true, message: "Please select your Educational Qualification!" }]}
//         >
//           <Select
//             showSearch
//             placeholder="Select your qualification"
//             filterOption={(input, option) =>
//               (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
//             }
//             options={[
//               { value: "1", label: "B.A" },
//               { value: "2", label: "B.Sc" },
//               { value: "3", label: "B.Com" },
//               { value: "4", label: "B.B.A" },
//               { value: "5", label: "ITI/Diploma" },
//               { value: "6", label: "B.E/ B.Tech Computer Science" },
//               { value: "7", label: "B.E/ B.Tech ECE" },
//               { value: "8", label: "B.E/ B.Tech EEE" },
//               { value: "9", label: "B.E/ B.Tech Information Technology" },
//               { value: "10", label: "B.E/ B.Tech Civil" },
//               { value: "11", label: "B.E/ B.Tech Mechanical" },
//               { value: "12", label: "B.E/ B.Tech Others" },
//               { value: "13", label: "M.E/ M.Tech" },
//               { value: "14", label: "Others" },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" style={{ width: "50%", margin: "0 auto" }}>
//             {currentItem ? "Update" : "Submit"}
//           </Button>
//         </Form.Item>
//       </Form>

//       {/* Display the submitted data in a table */}
//       <Table columns={columns} dataSource={formData} rowKey={(record) => record.email} />
//     </div>
//   );
// }

import React, { useState } from "react";
import { Button, Form, Input, Radio, Select, Table, message } from "antd";

export default function FormValidation() {
  const [formData, setFormData] = useState([]);
  const [value, setValue] = useState(0);
  const [form] = Form.useForm();
  const [currentItem, setCurrentItem] = useState(null);
  const [btn, setBtn] = useState(false);
  

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onCancel = () => {
    form.resetFields(); // Reset form fields
    setCurrentItem(null); // Optionally reset the current item being edited
    setBtn(false);
  };
  

  const onFinish = (values) => {
    if (currentItem) {
      // Update existing item
      const updatedData = formData.map(item =>
        item.email === currentItem.email ? { ...item, ...values } : item
      );
      setFormData(updatedData);
      setCurrentItem(null);
      setBtn(false); // Reset the btn state after update

    } else {
      // Add new item
      setFormData([...formData, values]);
    }
    form.resetFields(); // Reset the form fields after submission
    message.success("Form submitted successfully!"); // Display success message
  };

  const validatePhoneNumber = (_, value) => {
    const phoneRegex = /^\d{10}$/;
    if (!value || phoneRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Please enter a valid phone number"));
  };

  const validateEmail = (_, value) => {
    if (!value || value.includes("@") && value.endsWith(".com")) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Please enter a valid Email"));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (gender === 1 ? "Male" : "Female"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Course Interested",
      dataIndex: "course",
      key: "course",
      render: (course) => {
        const courses = {
          1: "React",
          2: "Java",
          3: "Python",
          4: "Flutter",
        };
        return courses[course];
      },
    },
    {
      title: "Educational Qualification",
      dataIndex: "educationalQualification",
      key: "educationalQualification",
      render: (qualification) => {
        const qualifications = {
          1: "B.A",
          2: "B.Sc",
          3: "B.Com",
          4: "B.B.A",
          5: "ITI/Diploma",
          6: "B.E/ B.Tech Computer Science",
          7: "B.E/ B.Tech ECE",
          8: "B.E/ B.Tech EEE",
          9: "B.E/ B.Tech Information Technology",
          10: "B.E/ B.Tech Civil",
          11: "B.E/ B.Tech Mechanical",
          12: "B.E/ B.Tech Others",
          13: "M.E/ M.Tech",
          14: "Others",
        };
        return qualifications[qualification];
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            onClick={() => handleEdit(record)}
            style={{ color: "blue" }}
            disabled={btn}
            // disabled={btn && (currentItem && currentItem.email !== record.email)} // Disable if btn is true and editing a different item
          >
            Update
          </Button>
          <Button
            onClick={() => handleDelete(record.email)}
            style={{ color: "#f5222d", marginLeft:"5px" }}
            disabled={btn && (currentItem && currentItem.email !== record.email)} // Disable if btn is true and editing a different item

          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (item) => {
    form.setFieldsValue(item); // Populate the form with the item data
    setCurrentItem(item); // Set the current item being edited
    setBtn(true); // Set btn state to true to disable other update buttons

  };

  const handleDelete = (email) => {
    const updatedData = formData.filter(item => item.email !== email);
    setFormData(updatedData);
    message.success("Item deleted successfully!"); // Display success message
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", border: "2px solid #f8f9fa", borderRadius:"5px", padding: "20px" }}>
      <Form
        form={form} // Attach the form instance
        name="basic"
        layout="vertical"
        style={{ maxWidth: "500px",margin:"0 auto" }}
        onFinish={onFinish} // Handle form submission
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your Email address!" },
            { validator: validateEmail }, // Custom email validation
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          type="number"
          rules={[
            { required: true, message: "Please input your phone number!" },
            { validator: validatePhoneNumber }, // Custom phone validation
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Course Interested"
          name="course"
          rules={[{ required: true, message: "Please select your course!" }]}
        >
          <Select
            showSearch
            placeholder="Select a course"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "React" },
              { value: "2", label: "Java" },
              { value: "3", label: "Python" },
              { value: "4", label: "Flutter" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Educational Qualification"
          name="educationalQualification"
          rules={[{ required: true, message: "Please select your Educational Qualification!" }]}
        >
          <Select
            showSearch
            placeholder="Select your qualification"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "B.A" },
              { value: "2", label: "B.Sc" },
              { value: "3", label: "B.Com" },
              { value: "4", label: "B.B.A" },
              { value: "5", label: "ITI/Diploma" },
              { value: "6", label: "B.E/ B.Tech Computer Science" },
              { value: "7", label: "B.E/ B.Tech ECE" },
              { value: "8", label: "B.E/ B.Tech EEE" },
              { value: "9", label: "B.E/ B.Tech Information Technology" },
              { value: "10", label: "B.E/ B.Tech Civil" },
              { value: "11", label: "B.E/ B.Tech Mechanical" },
              { value: "12", label: "B.E/ B.Tech Others" },
              { value: "13", label: "M.E/ M.Tech" },
              { value: "14", label: "Others" },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "49%", margin: "0 auto" }}>
            {currentItem ? "Update" : "Submit"}
          </Button>
          <Button onClick={onCancel} style={{ width: "49%", marginLeft:"10px" }}>
            Cancel
          </Button>
          
        </Form.Item>
        
      </Form>

      {/* Display the submitted data in a table */}
      <Table columns={columns} dataSource={formData} rowKey={(record) => record.email} />
    </div>
  );
}
