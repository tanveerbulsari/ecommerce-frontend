// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updateitem } from "../actions/items";
// import ItemsDataService from "../services/items.service";

// class Item extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeTitle = this.onChangeTitle.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.getItem = this.getItem.bind(this);
//     this.updateStatus = this.updateStatus.bind(this);
//     this.updateContent = this.updateContent.bind(this);
//     this.removeItem = this.removeItem.bind(this);

//     this.state = {
//       currentItem: {
//         id: null,
//         title: "",
//         description: "",
//         published: false,
//       },
//       message: "",
//     };
//   }

//   componentDidMount() {
//     this.getItem(this.props.match.params.id);
//   }

//   onChangeTitle(e) {
//     const title = e.target.value;

//     this.setState(function (prevState) {
//       return {
//         currentItem: {
//           ...prevState.currentItem,
//           title: title,
//         },
//       };
//     });
//   }

//   onChangeDescription(e) {
//     const description = e.target.value;

//     this.setState((prevState) => ({
//       currentItem: {
//         ...prevState.currentItem,
//         description: description,
//       },
//     }));
//   }

//   getItem(id) {
//     ItemsDataService.get(id)
//       .then((response) => {
//         this.setState({
//           currentItem: response.data,
//         });
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   updateStatus(status) {
//     var data = {
//       id: this.state.currentItem.id,
//       title: this.state.currentItem.title,
//       description: this.state.currentItem.description,
//       published: status,
//     };

//     this.props
//       .updateItem(this.state.currentItem.id, data)
//       .then((reponse) => {
//         console.log(reponse);

//         this.setState((prevState) => ({
//           currentItem: {
//             ...prevState.currentItem,
//             published: status,
//           },
//         }));

//         this.setState({ message: "The status was updated successfully!" });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   updateContent() {
//     this.props
//       .updateItem(this.state.currentItem.id, this.state.currentItem)
//       .then((reponse) => {
//         console.log(reponse);
        
//         this.setState({ message: "The Item was updated successfully!" });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

 

//   render() {
//     const { currentItem } = this.state;

//     return (
//       <div>
//         {currentItem ? (
//           <div className="edit-form">
//             <h4>Item</h4>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="title"
//                   value={currentItem.title}
//                   onChange={this.onChangeTitle}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="description"
//                   value={currentItem.description}
//                   onChange={this.onChangeDescription}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>
//                   <strong>Status:</strong>
//                 </label>
//                 {currentItem.published ? "Published" : "Pending"}
//               </div>
//             </form>

//             {currentItem.published ? (
//               <button
//                 className="badge badge-primary mr-2"
//                 onClick={() => this.updateStatus(false)}
//               >
//                 UnPublish
//               </button>
//             ) : (
//               <button
//                 className="badge badge-primary mr-2"
//                 onClick={() => this.updateStatus(true)}
//               >
//                 Publish
//               </button>
//             )}

          
//             <button
//               type="submit"
//               className="badge badge-success"
//               onClick={this.updateContent}
//             >
//               Update
//             </button>
//             <p>{this.state.message}</p>
//           </div>
//         ) : (
//           <div>
//             <br />
//             <p>Please click on a Item...</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default connect(null, { updateItem })(Item);
