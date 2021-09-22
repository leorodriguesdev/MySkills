//import profileImg from '../assets/profile.jpeg';
import React, { useState, useEffect, Profiler } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
    } from 'react-native';
import { Button } from '../components/Button';
import { Profile } from '../components/Profile';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
    date?: Date;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveNewSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    };

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGretting('Good morning 🌞');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good afternoon 🌤');
        } else {
            setGretting('Good night 🌜');
        }
    }, [])

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.greetings}>
                {gretting}
            </Text>

            <Profile/>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button
                title='Add'
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 15 }]} >
                MySkills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item.name}
                        onPress={() => handleRemoveNewSkill(item.id)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 20,
        borderRadius: 7
    },
    greetings: {
        color: '#fff'
    }
});