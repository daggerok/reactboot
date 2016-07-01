package com.daggerok.data;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * Created by mak on 7/1/16.
 */
@Data
@Document
@NoArgsConstructor
@Accessors(chain = true)
public class Todo implements Serializable {

    private static final long serialVersionUID = 6684171577544357493L;

    @Id String uid;
    @NotNull Long id;
    @NotNull String text;
    @NotNull boolean completed;
}
