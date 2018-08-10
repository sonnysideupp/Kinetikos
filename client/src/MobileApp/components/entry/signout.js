<View style={styles.centerContainer}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.signinButton}
                    onPress={() => this._signInAsync(login)}
                  >
                    <Text style={styles.buttonText}>Login!</Text>
                  </TouchableOpacity>
                </View>
              </View>