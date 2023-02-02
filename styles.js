import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  secContainer: {
    justifyContent: "center",
    height: height / 2,
  },
  button: {
    backgroundColor: "#B99B6B",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#698269",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#F1DBBF",
    textTransform: "uppercase",
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#698269",
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 15,
  },
  formButton: {
    marginBottom: 35,
    backgroundColor: "#B99B6B",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#698269",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.75,
    elevation: 4,
  },
  inputForm: {
    marginBottom: 55,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",
  },
  x: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.75,
    elevation: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 24,
    top: -20,
  },
});

export default styles;
