import { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { MoneyContext } from "../contexts/GlobalState";
import { globalStyles } from "../../styles/globaStyles";
import TransactionItem from "../../components/TransactionItem";

export default function Transactions() {
  const [transactions] = useContext(MoneyContext);

  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem {...item} />}
        ListEmptyComponent={
          <Text style={globalStyles.secondaryText}>
            Ainda não há nenhum item!
          </Text>
        }
        style={globalStyles.content}
      />
    </View>
  );
}
