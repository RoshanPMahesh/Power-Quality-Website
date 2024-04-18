#include <WiFi.h>
#include <MySQL.h>

char ssid[] = "303Fifth";
//303Fifth and IlliniBlue-3
char ssid_password[] = "IlliniBlue-3";
IPAddress server_addr(104, 154, 65, 227); // IP address of your MySQL server 104.154.65.227
// char user[] = "root";
// char dbpassword[] = "RoshanMahesh99";
// char db[] = "445db";
//char port[] = "/dev/cu.usbmodem11201";

char dbHost[] = "104.154.65.227";
uint16_t dbPort = 3306;
char user[] = "root";
char password[] = "RoshanMahesh99";
char database[] = "445db";
char table[] = "PowerData";

WiFiClient client;
MySQL sql(&client, dbHost, dbPort);
IPAddress local_IP(100,168,43,201);
IPAddress subnet(255, 255, 255, 0);
IPAddress gateway(192, 168, 101, 1);
IPAddress primaryDNS(8, 8, 4, 4);
IPAddress secondaryDNS(4, 2, 2, 4); 
#define MAX_QUERY_LEN 128

void setup() {
  

  Serial.begin(115200);
  delay(100);

  // if (!WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)) {
  //   Serial.println("STA failed to configure");
  // }

  WiFi.begin(ssid, ssid_password);
  Serial.println("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected to Wi-Fi");

  Serial.print("Connecting to ");
  Serial.println(dbHost);

	if (sql.connect(user, password, database)) {
    Serial.println("CONNECTED");
  }

}

bool queryExecute(DataQuery_t& data, const char* queryStr, ...) {
  if (sql.connected()) {
    char buf[MAX_QUERY_LEN];
    va_list args;
    va_start (args, queryStr);
    vsnprintf (buf, sizeof(buf), queryStr, args);
    va_end (args);

    Serial.printf("Executing SQL query: %s\n", buf);
    // Execute the query
    return sql.query(data, buf);
  }
  return false;
}

void loop() {
    DataQuery_t data;
  if (queryExecute(data, "SELECT * FROM %s", table)){
    Serial.println("Query executed.");
    if (data.recordCount) {
      // Print formatted content of table
      sql.printResult(data, Serial);
      Serial.print('\n');

      /*
      * data.fields is a std::vector<Field_t> object (Field_t defined in DataQuery.h)
      * which you can manually iterate using a range based for loop for easy data parsing
      */
      for (Field_t field : data.fields) {
        Serial.printf("%s (%d), ", field.name.c_str(), field.size);
      }
      Serial.print('\n');

      /*
      * data.records is a std::vector<Record_t> object (Record_t defined in DataQuery.h)
      * which you can manually iterate using a range based for loop as for fields
      * or as alternative you can iterate each record with a classic for loop
      */
      for (int row = 0; row < data.recordCount; row++) {
        for (int col = 0; col < data.fieldCount; col++) {
          String value = data.getRowValue(row, col);
          // String value = data.records.record.at(i).c_str();
          Serial.printf("%s, ", value.c_str());
        }
        Serial.print('\n');
      }

      // for (Record_t rec : data.records, i++) {
      //   for (int col = 0; col < data.fieldCount; col++) {
      //     Serial.printf("%s, ", rec.record.at(i).c_str());
      //   }
      //   Serial.print('\n');
      // }
    }
  }
  Serial.print('\n');
  delay(5000);
}
