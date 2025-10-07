import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen() {

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text>ModalScreen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setShowModal(!showModal)}>
        <Text style={styles.btnText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
      animationType='slide'
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      transparent={true}
      >
        <View style={styles.modalBg}>
          <View style={styles.Bg}>
            <TouchableOpacity style={styles.btn} onPress={() => setShowModal(false)}>
              <Text style={styles.btnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:"center",
    padding: 20
  },
  btn : {
    width: '100%',
    borderWidth:0.5,
    borderColor: "#fff",
    backgroundColor:"#075a21ff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20
  },
  btnText : {
    fontSize: 20,
    fontWeight: "bold",
    color : "#fff"
  },
  modalBg : {
    justifyContent: "center",
    alignItems:"center",
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: "100%"
  },
  Bg :{
    width:"100%",
    backgroundColor: "#bcbbbbff",
    padding: 50,
    borderRadius:20,
    elevation:5,
    shadowColor:"#000"
  }
})