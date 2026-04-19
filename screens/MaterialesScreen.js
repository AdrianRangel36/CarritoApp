import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

export default function MaterialesScreen() {
  const materiales = [
    {
      id: "1",
      nombre: "ESP32",
      cantidad: "1",
      funcion:
        "Cerebro del robot; procesa las señales de los sensores y ejecuta la lógica de control para los motores.",
      imagen:
        "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/2284773fb/placa-de-programacion-tipo-esp32-bluetooth-wi-fi.jpg",
    },
    {
      id: "2",
      nombre: "Puente H",
      cantidad: "1",
      funcion:
        "Controlador de potencia que permite al ESP32 manejar el giro y la velocidad de los motores DC.",
      imagen:
        "https://www.taloselectronics.com/cdn/shop/products/puente_h_doble_l298n_mexico_jalisco_guadalajara_700x700.jpg?v=1593817164",
    },
    {
      id: "3",
      nombre: "Motor",
      cantidad: "2",
      funcion:
        "Motores que proporcionan la fuerza mecánica para mover las ruedas del robot.",
      imagen:
        "https://blog.uelectronics.com/wp-content/uploads/2021/08/Motorreductor.jpg",
    },
    {
      id: "4",
      nombre: "Llanta",
      cantidad: "2",
      funcion:
        "Neumáticos que proporcionan tracción contra la superficie de la pista.",
      imagen:
        "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/19455e22a/llantas-de-plastico.jpg",
    },
    {
      id: "5",
      nombre: "Chasis",
      cantidad: "1",
      funcion:
        "Estructura física que sostiene y organiza todos los componentes del robot.",
      imagen: "https://natytec.com.mx/wp-content/uploads/2017/09/Icono1.jpg",
    },
    {
      id: "6",
      nombre: "Headers Macho-Hembra",
      cantidad: "2",
      funcion:
        "Conectores soldados a la placa para permitir la conexión y desconexión fácil de componentes.",
      imagen: "https://sieeg.com.mx/wp-content/uploads/2023/01/header3-2.jpg",
    },
    {
      id: "7",
      nombre: "Capacitores",
      cantidad: "2",
      funcion:
        "Filtran el ruido eléctrico generado por los motores para evitar que el ESP32 se reinicie.",
      imagen:
        "https://pigra.com.mx/715-large_default/condensador-ceramico-104-1-50v.jpg",
    },
    {
      id: "8",
      nombre: "Placa de cobre",
      cantidad: "1",
      funcion:
        "Base para fabricar el circuito impreso donde se sueldan los componentes.",
      imagen:
        "https://mvelectronica.s3.us-east-2.amazonaws.com/productos/PF5X10P/623b808916558.webp",
    },
    {
      id: "9",
      nombre: "Soporte para sensores",
      cantidad: "1",
      funcion:
        "Pieza estructural que mantiene los sensores ópticos alineados y a la distancia correcta del suelo.",
      imagen:
        "https://pic2-cdn.creality.com/comp/model/9ef5a1aa65268102dbf74007dff8a61a.webp",
    },
    {
      id: "10",
      nombre: "Sensores Opticos",
      cantidad: "3",
      funcion:
        "Detectan la diferencia de reflexión entre la línea negra y el fondo blanco del circuito.",
      imagen:
        "https://sonrobots.com/wp-content/uploads/2021/01/TCRT5000M-1.jpg",
    },
    {
      id: "11",
      nombre: "Bola loca",
      cantidad: "1",
      funcion:
        "Rueda omnidireccional que sirve como punto de apoyo y permite giros suaves en cualquier dirección.",
      imagen:
        "https://www.ferretronica.com/cdn/shop/products/Rueda_loca_Tipo_Rodachin_1_Pulgada_Ball_Caster_Rueda_Libre_para_Robot_Seguidor_de_Linea_Luz_Proyectos_y_Prototipos_de_Electronica_Ferretronica_d0b50953-402f-429b-9079-e6fdfcb93af0_512x.jpg?v=1577499089",
    },
    {
      id: "12",
      nombre: "Jumpers",
      cantidad: "20",
      funcion:
        "Cables de conexión rápida para interconectar los componentes en la fase de pruebas.",
      imagen:
        "https://sandorobotics.com.mx/wp-content/uploads/2023/09/32790b46-d348-4762-93c5-957163f899e2.jpg",
    },
    {
      id: "13",
      nombre: "Switch",
      cantidad: "1",
      funcion:
        "Permite encender o apagar el suministro eléctrico del robot de forma segura.",
      imagen:
        "https://m.media-amazon.com/images/I/51Q9r2hVMVL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: "14",
      nombre: "Portapilas",
      cantidad: "1",
      funcion:
        "Contenedor físico para las baterías, asegura los contactos eléctricos.",
      imagen:
        "https://techmake.com/cdn/shop/products/Captura_de_pantalla_2019-10-31_a_la_s_12.18.27_p.m._650x534.png?v=1572545986",
    },
    {
      id: "15",
      nombre: "Pilas 18650",
      cantidad: "2",
      funcion:
        "Fuente de energía recargable de alta capacidad para alimentar motores y electrónica.",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_778881-MLA104992018545_012026-O.webp",
    },
    {
      id: "16",
      nombre: "Cinta aislante",
      cantidad: "",
      funcion:
        "Protege conexiones eléctricas expuestas para evitar cortocircuitos accidentales (Evita que el carro explote). ",
      imagen:
        "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/18371c757/cinta-de-aislar-de-18-3-m.jpg",
    },
  ];

  const renderMaterial = ({ item }) => (
    <View style={styles.materialItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.materialName}>{item.nombre}</Text>
        <Text style={styles.materialSubtitle}>Cantidad: {item.cantidad}</Text>
        <Text style={styles.materialSubtitle}>Función: {item.funcion}</Text>
      </View>
      <Image style={styles.img} source={{ uri: item.imagen }} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Materiales</Text>
      <Text style={styles.subtitle}>Lista de materiales utilizados</Text>

      <FlatList
        scrollEnabled={false}
        data={materiales}
        renderItem={renderMaterial}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  materialItem: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
    flexDirection:'row'
  },
  infoContainer:{
    width:150
  },
  materialName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  materialSubtitle: {
    fontSize: 15,
    color: "#666",
    textAlign:'left',
    margin:4
  },
  img: {
    width: 170,
    height: 170,
    borderRadius:10
  },
});
