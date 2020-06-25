import React, {useEffect, useState} from 'react';
import {useAuth} from '../../hooks/auth';
import {
  Container,
  Icon,
  Button,
  ViewHeader,
  HeaderTitle,
  Username,
  ViewList,
  ListName,
  ListEmail,
  ListCategory,
  ViewName,
  ViewEmail,
  ViewCategory,
} from './styles';
import api from '../../services/api';
import {Text, ScrollView} from 'react-native';

interface List {
  id: string;
  name: string;
  email: string;
  category: string;
}
const Dashboard: React.FC = () => {
  const [lists, setLists] = useState<List[]>([]);
  const {signOut, user} = useAuth();

  console.log(lists);

  async function requestUsers(): Promise<void> {
    const response = await api.get('/users');

    setLists(response.data);
  }

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <Container>
      <ViewHeader>
        <Button onPress={signOut}>
          <Icon name="power" />
        </Button>
        <HeaderTitle>
          Bem Vindo(a), {'\n'}
          <Username>
            {user.name}, {'\n'}Nivel: {user.category}
          </Username>
        </HeaderTitle>
      </ViewHeader>
      <ScrollView style={{padding: 32}}>
        {lists.map((list) => (
          <ViewList key={list.id}>
            <ViewName>
              <ListName>{list.name}</ListName>
            </ViewName>
            <ViewEmail>
              <ListEmail>{list.email}</ListEmail>
            </ViewEmail>
            <ViewCategory>
              <ListCategory>{list.category}</ListCategory>
            </ViewCategory>
          </ViewList>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
