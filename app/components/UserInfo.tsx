function UserInfo() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        UserInfo
        <div>Nome: <span className="font-bold">Eduardo</span></div>
        <div>Email: <span className="font-bold">eduardo@gmail.com</span></div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
      </div>
    </div>
  );
}

export default UserInfo;
