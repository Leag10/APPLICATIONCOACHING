import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Logo from '../assets/images/image1.jpg'
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function Home (){
    const Navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
                <View style={styles.containerHeader}>
                    <View style={styles.containerLogo}>
                        <Image source={Logo} style={styles.logo} />
                    </View>
                    <Text style={styles.title}>Application Coaching</Text>
                    <TouchableOpacity 
                        onPress={()=> Navigation.navigate('signIn')}
                        style={styles.containerButtonSignIn}>
                        <MaterialIcons name="email" size={24} color={"white"} style={styles.iconEmail} />
                        <Text style={styles.textButton}>S'inscrire avec email</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerConnection}>
                    <Text style={styles.titleConnection}>Vous avez déjà un compte?</Text>
                    <TouchableOpacity style={styles.containerButtonConnection} onPress={()=> Navigation.navigate('logIn')}>
                        <Text style={styles.textButtonConnection}>Connexion</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.footerText}>
                En vous inscrivant, vous acceptez nos politique de confidentialité et termes & condition
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 25,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#4472C4",


    },
    containerHeader: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 15,
    },
    containerLogo: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 500,
        overflow: 'hidden',
        width: 100,
        height: 100
    },
    logo: {
        objectFit: 'contain',
        width: 80,
        height: 80

    },
    title: {
        marginTop: 30,
        color: "white",
        fontSize: 25,
        fontWeight: 'bold'

    },
    containerButtonSignIn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 10,
        width: '80%',
        borderWidth: 1,

    },
    iconEmail: {

    },
    textButton: {
        color: "white"
    },
    containerConnection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    },
    titleConnection:{
        color: 'white'
    },
    containerButtonConnection :{
        padding: 10,
        backgroundColor: '#92D050',
        borderRadius: 10
    },
    textButtonConnection:{
        color: "white"
    },
    footerText:{
        color: 'white',
        textAlign: 'center'
    }

})