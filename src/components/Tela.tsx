import { Text, View, StyleSheet, Image } from "react-native";

const Tela = () => {
  return (
    <>
    <View style={styles.container0}>
     <View style={styles.infoBox0}>
      <View style={styles.image}>
      <Image source={require('../../assets/img/line2.png')} style={styles.image}/>
      </View></View>
      </View>
    <View style={styles.container}>
      <View style={styles.infoBox}><Text style={{ color: "white" }}>
        <Text style={styles.title}>Condutor</Text>
        <Text style={styles.content}>
        {'\n'}Gerencia sua {'\n'}habilitação
        </Text></Text>
      </View>
      <View style={styles.infoBox2}>
        <Text style={styles.title}>Veiculos</Text>
        <Text style={styles.content}>
          Acesso ao <Text style={{ fontWeight: 'bold' }}>CRV-e</Text>,{'\n'}venda digital
        </Text>
      </View>
      <View style={styles.infoBox3}><Text style={{ color: "white" }}>
        <Text style={styles.title}>Infrações</Text>
        <Text style={styles.content}>
        {'\n'}Visualize e pague infrações {'\n'}com até <Text style={{ fontWeight: 'bold' }}>40% de desconto
        </Text></Text></Text>
      </View>
      <View style={styles.infoBox4}>
        <Text style={styles.title}>Educação</Text>
        <Text style={styles.content}>
          Conheça nossas {'\n'}<Text style={{ fontWeight: 'bold' }}>campanhas</Text> e <Text style={{ fontWeight: 'bold' }}>projetos
        </Text></Text>
      </View>
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  
  container0: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  infoBox0: {
    width: '100%',
    padding: 13,
    backgroundColor: "#0f235b",
    borderRadius: 10,
    top: 30,
  },
  image: {
    paddingTop: 25,
    width: "100%",
    height: 100, 
    top: -10,
  
    
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
  infoBox: {
    width: '100%',
    padding: 23,
    backgroundColor: '#00A85A',
    borderRadius: 10,
    top: -220,
  },
  infoBox2: {
    width: '100%',
    padding: 23,
    backgroundColor: '#FFCC2A',
    borderRadius: 10,
    marginTop: 15,
    top: -220,
  },
infoBox3: {
  width: '100%',
  padding: 23,
  backgroundColor: '#1A3493',
  borderRadius: 10,
  marginTop: 15,
  top: -220,
},
infoBox4: {
  width: '100%',
  padding: 23,
  backgroundColor: '#64B4EF',
  borderRadius: 10,
  marginTop: 15,
  top: -220,
},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
}
});

export default Tela;