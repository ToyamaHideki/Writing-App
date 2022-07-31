
const Main = (props) => {


    const handlechange = (e) =>{
       props.setState(e.target.value);
       props.setLength(e.target.value.length);
    }


  return (
   <>
   <main>
        <div className="bgImage">
            <div className='container'>
                    <div className='container__inner'>
                        <div className='item'>
                            <textarea rows="1"  onChange={handlechange}/>
                            <br/>
                            {/* 入力した値を表示できる */}
                            <textarea id='write'  rows="15" readOnly  placeholder='上部で入力した値が表示されます。' value={props.state} />
                        </div>


                    </div>
                </div>
        </div>
   </main>
   </>
  )
}

export default Main;