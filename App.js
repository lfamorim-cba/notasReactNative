import React,{Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableOpacityBase} from 'react-native'

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {nota1: 0, nota2: 0, faltas: 0, resultado: ""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){

     let num1 = parseInt(this.state.nota1)
     let num2 = parseInt(this.state.nota2)
     let media = (num1 + num2) / 2
    
     if(media >= 6 && this.state.faltas <= 10){
       this.setState({resultado: "Aluno foi Aprovado"})
     } else {
      this.setState({resultado: "Aluno foi Reprovado"})
     }
  
    }

  render(){
    return(
        <View style={style.containers}>
          <TextInput style={style.textinput}
            onChangeText={(nota1) => {this.setState({nota1})}}
            keyboardType="numeric"
            placeholder="Nota 1"          
          />
          <TextInput style={style.textinput}
            onChangeText={(nota2) => {this.setState({nota2})}}
            keyboardType="numeric"
            placeholder="Nota 2"          
          />
          <TextInput style={style.textinput}
            onChangeText={(faltas) => {this.setState({faltas})}}
            keyboardType="numeric"
            placeholder="Números de Faltas"          
          />
          <TouchableOpacity style={style.button} onPress={this.calcular}>
            <Text style={style.textButton}>Calcular</Text>
          </TouchableOpacity>
          <Text style={style.textResultado}>{this.state.resultado} </Text>
        </View>
    )
  }
}

const style = StyleSheet.create({
    container:{
      flex: 1
    },
    textinput:{
      padding: 30,
      backgroundColor: '#CCCCCC',
      marginLeft: 50,
      marginRight: 50,
      marginTop: 30,
      fontSize: 20
    },
    button:{
      margin: 20,
      padding: 20,
      backgroundColor: '#34474f'
    },
    textButton:{
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      alignSelf: 'center'
    },
    textResultado:{
      color: '#000',
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'center'
    }
})