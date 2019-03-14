import React, { Component } from 'react';
import '../App.css';
import Note from './note';

class NoteForm extends Component {
    
    state = {
        'note_text':'',
        'notes':[],
        'message':'',
    }

    handleChange=(e)=>{
        let note_text=e.target.value;
        this.setState({note_text});
    }

    handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            let note_text=this.state.note_text;
            let note_arr=this.state.notes;
            if(note_text===''){
                return false;
            }else{
                note_arr.push(note_text);
                note_text='';
                this.setState({note_text});
            }

        }
    }

    handleDelete=(key)=>{
        let notes=this.state.notes;
        notes.splice(key,1);
        this.setState({notes})
    }

    handleNote=(e)=>{
        let note_text=this.state.note_text;
        let note_arr=this.state.notes;
        note_arr.push(note_text);
        note_text='';
        this.setState({note_text});
    }



    render() { 
        return ( 
            <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                <div className='row'>
                    <div className='col-sm-10'>
                    <input type='text' onKeyPress={this.handleKeyPress} value={this.state.note_text} onChange={this.handleChange} placeholder='Enter Note text' className='form-control customTextField'></input>
                    </div>
                    <div className='col-sm-2'>
                    <button className='btn btn-outline-success' onClick={this.handleNote}>Note</button>
                    </div>
                </div>
                </div>
            </div>
            <br></br>
            <div className='row'>
            <div className='col-md-12'>
                {this.state.notes.map((val,key)=>
                    <div key={key}>
                        <Note key={key} value={val} id={key} delete={this.handleDelete}/>
                    </div>
                    )}
            </div>
            </div>
            </div>
         );
    }
}
 
export default NoteForm;