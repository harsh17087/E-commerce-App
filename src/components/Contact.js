const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="grid grid-flow-col ">
        <div className="grid-cols-6 m-4 p-4">
          <img
            className="w-108 h-72 rounded-xl"
            src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fHww"
            alt="cart image"
          />
        </div>
        <div className="grid-cols-6 m-4 p-4 space-y-4">
          <h1 className="font-bold text-4xl">How can we help 👋</h1>
          <h1 className="font-bold text-xl">Tell Your concern</h1>
          <textarea
            className="border w-80 h-48 p-2 border-black rounded-lg shadow-lg bg-gray-50 text-start break-words"
            type="text"
          ></textarea><br/>
          <button className="btn btn-primary btn-block">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
